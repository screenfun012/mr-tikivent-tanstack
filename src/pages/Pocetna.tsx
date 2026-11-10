// @ts-nocheck
/* eslint-disable */
import * as React from 'react'
import { DCLogic, createDCPage, __css, __style, __dv, __dc, __arr, __t } from '../lib/dc'

// ───────────────────────────── Logika ─────────────────────────────
class Component extends DCLogic {}

// ───────────────────────────── Prikaz ─────────────────────────────
export const pageHead = {
  "meta": [
    {
      "title": "MR Engines · Tiki Vent"
    },
    {
      "name": "theme-color",
      "content": "#0b0b0d"
    },
    {
      "property": "og:title",
      "content": "MR Engines · Tiki Vent"
    },
    {
      "property": "og:description",
      "content": "Remont motora i delovi motorne grupe - nove digitalne prezentacije."
    },
    {
      "property": "og:image",
      "content": "/assets/video-poster-b.jpg"
    }
  ],
  "links": [
    {
      "rel": "preconnect",
      "href": "https://fonts.googleapis.com"
    },
    {
      "href": "https://fonts.googleapis.com/css2?family=Figtree:wght@300..900&family=JetBrains+Mono:wght@400..700&display=swap",
      "rel": "stylesheet"
    }
  ]
}

const PSEUDO_CSS = ".pcp0:hover{transform:translateY(-4px) !important;border-color:rgba(237,28,36,.6) !important;color:#f2f2f3 !important}"

const PAGE_CSS = "\n*{box-sizing:border-box}\nhtml,body{margin:0;background:#0b0b0d;color:#f2f2f3;font-family:Figtree,system-ui,sans-serif;-webkit-font-smoothing:antialiased}\na{color:#ed1c24;text-decoration:none}a:hover{color:#ff4b52}\n@keyframes fadeUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}\n@keyframes lineUp{from{transform:translateY(110%)}to{transform:none}}\n"

function view(v) {
  return (
    <>
      <style>{PSEUDO_CSS}</style>
      <style>{PAGE_CSS}</style>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "radial-gradient(ellipse at 50% -10%,rgba(237,28,36,.16),transparent 55%),#0b0b0d", position: "relative", overflow: "hidden" }}>
        {" "}
        <div style={{ position: "absolute", inset: "0", pointerEvents: "none", backgroundImage: "linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px)", backgroundSize: "56px 56px", WebkitMaskImage: "radial-gradient(ellipse at 50% 30%,#000 20%,transparent 70%)", maskImage: "radial-gradient(ellipse at 50% 30%,#000 20%,transparent 70%)" }}></div>
        {" "}
        <div style={{ position: "relative", flex: "1", width: "100%", maxWidth: "1320px", margin: "0 auto", padding: "clamp(40px,7vw,88px) clamp(16px,3vw,32px) 40px", display: "flex", flexDirection: "column", gap: "clamp(32px,5vw,56px)" }}>
          {" "}
          <div style={{ display: "flex", flexDirection: "column", gap: "18px", alignItems: "flex-start" }}>
            {" "}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".22em", textTransform: "uppercase", color: "#ed1c24", animation: "fadeUp .8s cubic-bezier(.22,1,.36,1) both" }}>
              <span style={{ width: "26px", height: "4px", background: "#ed1c24", transform: "skewX(-15deg)", display: "inline-block" }}></span>
              Digitalne prezentacije · 2026
            </div>
            {" "}
            <h1 style={{ margin: "0", fontSize: "clamp(38px,6vw,80px)", fontWeight: "800", lineHeight: ".98", letterSpacing: "-.035em", display: "flex", flexDirection: "column" }}>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em", marginBottom: "-.08em" }}>
                <span style={{ display: "block", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .1s both" }}>
                  Dve firme.
                </span>
              </span>
              {" "}
              <span style={{ display: "block", overflow: "hidden", paddingBottom: ".08em", marginBottom: "-.08em" }}>
                <span style={{ display: "block", color: "#ed1c24", animation: "lineUp .9s cubic-bezier(.22,1,.36,1) .25s both" }}>
                  Jedan standard.
                </span>
              </span>
              {" "}
            </h1>
            {" "}
            <p style={{ margin: "0", maxWidth: "58ch", fontSize: "clamp(16px,1.35vw,19px)", lineHeight: "1.55", color: "#c8c9cc", textWrap: "pretty", animation: "fadeUp .9s cubic-bezier(.22,1,.36,1) .4s both" }}>
              Izaberite stranicu. Obe rade na računaru, tabletu i telefonu - probajte pretragu motora, interaktivni presek i živi raspored razvoza.
            </p>
            {" "}
          </div>
          {" "}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))", gap: "20px" }}>
            {" "}
            <a href={"/"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "clamp(340px,42vw,460px)", padding: "clamp(24px,3vw,36px)", borderRadius: "24px", overflow: "hidden", background: "#131316", border: "1px solid rgba(255,255,255,.1)", color: "#f2f2f3", animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) .5s both", transition: "transform .35s cubic-bezier(.22,1,.36,1),border-color .25s" }} className={"pcp0"}>
              {" "}
              <img src={"/assets/video-poster-b.jpg"} alt={""} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".5" }} />
              {" "}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,11,13,.35) 0%,rgba(11,11,13,.15) 40%,rgba(11,11,13,.92) 100%)" }}></div>
              {" "}
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                {" "}
                <img src={"/assets/logo-crest-white-1200.png"} alt={"MR Engines"} style={{ height: "56px", width: "auto" }} />
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".18em", textTransform: "uppercase", color: "#c8c9cc" }}>
                  01
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "#ed1c24" }}>
                  Remont motora · od 1968
                </span>
                {" "}
                <span style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02" }}>
                  MR Engines
                </span>
                {" "}
                <span style={{ maxWidth: "44ch", fontSize: "15px", lineHeight: "1.5", color: "#c8c9cc" }}>
                  Katalog motora sa pretragom po kodu, procesi, video, mapa izvoza, tehničke knjige.
                </span>
                {" "}
                <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "48px", padding: "0 24px", margin: "6px 0 0 6px", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 12px 30px rgba(237,28,36,.32)" }}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Otvori stranicu →
                  </span>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
            <a href={"/tikivent"} style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between", gap: "28px", minHeight: "clamp(340px,42vw,460px)", padding: "clamp(24px,3vw,36px)", borderRadius: "24px", overflow: "hidden", background: "#131316", border: "1px solid rgba(255,255,255,.1)", color: "#f2f2f3", animation: "fadeUp 1s cubic-bezier(.22,1,.36,1) .65s both", transition: "transform .35s cubic-bezier(.22,1,.36,1),border-color .25s" }} className={"pcp0"}>
              {" "}
              <img src={"/assets/tikivent-hero-poster.png"} alt={""} style={{ position: "absolute", inset: "0", width: "100%", height: "100%", objectFit: "cover", opacity: ".5" }} />
              {" "}
              <div style={{ position: "absolute", inset: "0", background: "linear-gradient(180deg,rgba(11,11,13,.35) 0%,rgba(11,11,13,.15) 40%,rgba(11,11,13,.92) 100%)" }}></div>
              {" "}
              <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "16px" }}>
                {" "}
                <img src={"/assets/tikivent-white.svg"} alt={"Tiki Vent"} style={{ height: "44px", width: "auto" }} />
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".18em", textTransform: "uppercase", color: "#c8c9cc" }}>
                  02
                </span>
                {" "}
              </div>
              {" "}
              <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: "12px" }}>
                {" "}
                <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", fontWeight: "600", letterSpacing: ".2em", textTransform: "uppercase", color: "#ed1c24" }}>
                  Delovi motorne grupe · od 1992
                </span>
                {" "}
                <span style={{ fontSize: "clamp(28px,3vw,40px)", fontWeight: "800", letterSpacing: "-.03em", lineHeight: "1.02" }}>
                  Tiki Vent
                </span>
                {" "}
                <span style={{ maxWidth: "44ch", fontSize: "15px", lineHeight: "1.5", color: "#c8c9cc" }}>
                  Interaktivni presek motora, 20 brendova, živi raspored razvoza, kalkulator dostave.
                </span>
                {" "}
                <span style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", height: "48px", padding: "0 24px", margin: "6px 0 0 6px", background: "#ed1c24", color: "#fff", transform: "skewX(-15deg)", boxShadow: "0 12px 30px rgba(237,28,36,.32)" }}>
                  <span style={{ display: "inline-block", transform: "skewX(15deg)", fontSize: "12.5px", fontWeight: "700", letterSpacing: ".1em", textTransform: "uppercase" }}>
                    Otvori stranicu →
                  </span>
                </span>
                {" "}
              </div>
              {" "}
            </a>
            {" "}
          </div>
          {" "}
        </div>
        {" "}
        <footer style={{ position: "relative", borderTop: "1px solid rgba(255,255,255,.08)" }}>
          {" "}
          <div style={{ maxWidth: "1320px", margin: "0 auto", padding: "22px clamp(16px,3vw,32px)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "10px", fontFamily: "'JetBrains Mono',monospace", fontSize: "10.5px", letterSpacing: ".1em", textTransform: "uppercase", color: "#6b6c72" }}>
            {" "}
            <span>
              MR Engines · Tiki Vent · interni pregled
            </span>
            {" "}
            <span>
              Beograd · Srbija
            </span>
            {" "}
          </div>
          {" "}
        </footer>
      </div>
    </>
  )
}

export const defaultProps = {}

export default createDCPage(Component, view, defaultProps, "PocetnaPage")
