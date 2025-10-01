"use client";


import * as React from "react";
import { geoMercator, geoPath } from "d3-geo";
import { feature } from "topojson-client";
import type { FeatureCollection } from "geojson";
// @ts-ignore — импорт JSON из world-atlas
import world110m from "world-atlas/countries-110m.json";

type Props = {
  iso2?: "RU" | "CN" | "MY" | "KH" | string; // можно расширять
  className?: string;
  fillOpacity?: number; // прозрачность «водяного знака»
};

/**
 * Маппинг ISO2 -> имя для world-atlas (нужен, т.к. не у всех фичей есть properties.name).
 * Для этих стран ещё добавлен fallback по numeric id (см. ниже).
 */
const ISO2_TO_NAME: Record<string, string> = {
  RU: "Russia",
  CN: "China",
  MY: "Malaysia",
  KH: "Cambodia",
};

export default function CountryShape({ iso2, className, fillOpacity = 0.25 }: Props) {
  const name = iso2 ? ISO2_TO_NAME[iso2] : undefined;

  // Преобразуем topojson -> GeoJSON
  const countries = React.useMemo(() => {
    return feature(
      world110m as any,
      (world110m as any).objects.countries
    ) as unknown as FeatureCollection;
  }, []);

  // Ищем страну: сперва по имени, затем fallback по numeric id
  const country = React.useMemo(() => {
    if (!name) return null;

    // numeric id из набора 110m:
    const fallbackIdByName: Record<string, number> = {
      China: 156,     // CN
      Russia: 643,    // RU
      Malaysia: 458,  // MY
      Cambodia: 116,  // KH
    };

    const byName = (countries.features as any[]).find(
      (f) => f?.properties?.name === name
    );
    if (byName) return byName;

    const id = fallbackIdByName[name];
    if (id) {
      return (countries.features as any[]).find((f) => f?.id === id) ?? null;
    }
    return null;
  }, [countries, name]);

  // Рисуем в компактный вьюбокс
  const width = 64,
    height = 64,
    padding = 2;

  if (!country) {
    // безопасный fallback — скромный золотой квадратик
    return (
      <svg viewBox="0 0 64 64" className={className}>
        <rect x="8" y="8" width="48" height="48" fill="url(#goldGrad)" opacity={fillOpacity} />
        <defs>
          <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F7C948" />
            <stop offset="100%" stopColor="#C6A23A" />
          </linearGradient>
        </defs>
      </svg>
    );
  }

  const projection = geoMercator().fitExtent(
    [[padding, padding], [width - padding, height - padding]],
    country as any
  );
  const path = geoPath(projection as any);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className={className}>
      <path d={path(country as any) || ""} fill="url(#goldGrad)" opacity={fillOpacity} />
      <defs>
        <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F7C948" />
          <stop offset="100%" stopColor="#C6A23A" />
        </linearGradient>
      </defs>
    </svg>
  );
}
