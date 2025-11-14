
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-white flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-amber-900 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-amber-900 font-semibold text-lg animate-pulse">
          Cargando el sabor tolimense...
        </p>
      </div>
    </div>
  );
}
