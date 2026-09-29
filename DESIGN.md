---
name: 이창렬 포트폴리오
description: 개발 경험과 프로젝트를 읽기 쉽게 보여주는 포트폴리오
colors:
  primary: "#17734e"
  background: "#f9faf8"
  surface: "#ffffff"
  soft: "#eef1ed"
  ink: "#202824"
  muted: "#626b65"
  line: "#dce1db"
  dark-background: "#191d1b"
  dark-surface: "#232825"
  dark-ink: "#edf2ed"
  dark-primary: "#85d9ac"
typography:
  display:
    fontFamily: "Manrope, IBM Plex Sans KR, sans-serif"
    fontSize: "78px"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "0"
  headline:
    fontFamily: "Manrope, IBM Plex Sans KR, sans-serif"
    fontSize: "30px"
    fontWeight: 600
    lineHeight: 1.4
  body:
    fontFamily: "Manrope, IBM Plex Sans KR, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
rounded:
  control: "5px"
  media: "6px"
  dialog: "8px"
spacing:
  small: "12px"
  medium: "24px"
  large: "40px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "12px 22px"
---

# Design System: 이창렬 포트폴리오

## Overview

A calm, image-led developer portfolio. The name and real profile photograph identify the person immediately. Project covers provide visual evidence; dates, descriptions and repository links carry the detail.

## Colors

Near-white neutral surfaces, charcoal text, and restrained green accents. Dark mode uses neutral charcoal surfaces and a light green accent. Skill logo filters adapt monochrome assets to dark mode. Repository buttons keep a light surface with dark icons in both themes.

## Typography

Manrope for Latin text and IBM Plex Sans KR for Korean. The name is 78px on desktop and 57px on mobile. Section headings are 30px/26px. Korean text uses keep-all wrapping. Dates use tabular numerals.

## Layout

A 1240px maximum width and 40px desktop side gutters. Introductory sections use a 220px heading column with a 58px gap; projects use three equal columns with 28px gaps. At 760px, sections stack and navigation becomes a menu. Projects use two columns on small tablets and one below 440px.

## Elevation & Depth

Flat surfaces with fine separators. Elevation is reserved for the project dialog, with a soft offset shadow over a dark backdrop.

## Shapes

Small 5-8px corner radii for controls, imagery and dialogs. Circular icon buttons for theme, menu, close and experience detail actions.

## Components

Project cards show cover, category, period, name, description and tags. Experience and skill rows share separators and consistent typography. Dialogs keep focus inside, close on Escape, and restore focus to the triggering control. Navigation highlights the current section.

## Do's and Don'ts

- Use actual profile and project assets.
- Keep section order and dated experience content intact.
- Keep icons legible in both themes.
- Use a short hero entrance and 180-250ms interaction feedback.
- Respect reduced motion.
- Avoid decorative grids, hard shadows, nested panels, section numbers and repeated scroll reveals.
