"use client";
import React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function GAWrapper() {
  return <GoogleAnalytics trackPageViews />;
}
