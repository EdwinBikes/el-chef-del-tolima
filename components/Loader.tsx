
import React from "react";

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-[#FDFBF5] flex items-center justify-center z-[9999]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-[#345E3B] border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-[#345E3B] font-semibold text-lg animate-pulse">
          Cargando el auténtico sabor tolimense...
        </p>
      </div>
    </div>
  );
}
