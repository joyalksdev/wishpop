// src/lib/configLoader.js
// Config loading utility for WishPulse - no backend needed for personal use

import { surpriseConfig as defaultConfig } from "@/data/surpriseConfig";

/**
 * Load surprise config from multiple sources in priority order:
 * 1. URL search params (for sharing via deep link)
 * 2. localStorage (for creator preview)
 * 3. Default config (demo fallback)
 */
export function getSurpriseConfig(id) {
  // Demo mode
  if (id === "demo") {
    return { ...defaultConfig, id: "demo" };
  }

  // 1. Try URL params (for sharing)
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search);
    const encoded = urlParams.get("config");
    if (encoded) {
      try {
        // Unicode-safe base64 decode (matches generateShareUrl encoding)
        const jsonString = decodeURIComponent(escape(atob(encoded)));
        const parsed = JSON.parse(jsonString);
        return { ...defaultConfig, ...parsed, id };
      } catch (e) {
        console.warn("Invalid config in URL params:", e);
      }
    }

    // 2. Try localStorage (for creator preview)
    const stored = localStorage.getItem(`wishpulse_${id}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        return { ...defaultConfig, ...parsed, id };
      } catch (e) {
        console.warn("Invalid config in localStorage:", e);
      }
    }
  }

  // 3. Return default config
  return { ...defaultConfig, id };
}

/**
 * Generate shareable URL with config encoded in query params
 * Keeps URL under 2KB limit for broad compatibility
 */
export function generateShareUrl(config, baseUrl = "") {
  const origin = baseUrl || (typeof window !== "undefined" ? window.location.origin : "");
  // Use Unicode-safe base64 encoding (btoa fails on non-ASCII)
  const jsonString = JSON.stringify(config);
  const encoded = btoa(unescape(encodeURIComponent(jsonString)));
  const id = config.id || "surprise";
  return `${origin}/w/${id}?config=${encoded}`;
}

/**
 * Save config to localStorage for creator preview
 */
export function saveConfigToStorage(id, config) {
  if (typeof window !== "undefined") {
    localStorage.setItem(`wishpulse_${id}`, JSON.stringify(config));
  }
}

/**
 * Clear stored config
 */
export function clearConfigFromStorage(id) {
  if (typeof window !== "undefined") {
    localStorage.removeItem(`wishpulse_${id}`);
  }
}

/**
 * Validate config structure
 */
export function validateConfig(config) {
  const required = ["recipientName", "senderName", "steps"];
  for (const field of required) {
    if (!config[field]) {
      return { valid: false, error: `Missing required field: ${field}` };
    }
  }
  if (!Array.isArray(config.steps) || config.steps.length === 0) {
    return { valid: false, error: "Steps must be a non-empty array" };
  }
  return { valid: true };
}