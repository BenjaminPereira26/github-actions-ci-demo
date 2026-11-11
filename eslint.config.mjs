import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs}"], 
    plugins: { js }, 
    extends: ["js/recommended"],
    languageOptions: { 
      globals: {
        ...globals.node,  // <-- AQUI: cambia browser por node
        ...globals.jest   // <-- AQUI: agrega jest para las pruebas
      }
    } 
  }
]);