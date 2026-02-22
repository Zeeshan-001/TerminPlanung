import { lazy } from "react";
import type { ComponentType } from "react";

export function lazyLoad<T extends ComponentType<unknown>, K extends string = "default">(factory: () => Promise<Record<K, T>>, exportName?: K) {
  return lazy(() =>
    factory().then((module) => ({
      default: exportName ? module[exportName] : module.default,
    })),
  );
}

// Ohne Dafault Export Example for Import
// import("./compotentName").then((module) => {
//   return { default: module.about };
// });

// lazy(() => import("./component"));
