---
name: update-deploy-dist
description: Updates a Vite (React) project and regenerates the deployment folder (dist). Use when the user asks to update the deploy/deployment folder, refresh dist, package for deployment, or confirm dist is up to date.
---

# Update & Package to Deployment Folder (`dist`)

## Scope
- Project type: Vite (+ React) frontend
- Deployment output folder: `dist/`

## Workflow
1. **If a dev server is running**, stop it (avoid confusion about what is “built”):
   - In the terminal running `npm run dev`, press `Ctrl + C`.

2. **Install deps if needed** (first run / new machine / lockfile changed):
   - Run `npm install` (only when necessary).

3. **Build production bundle**:
   - Run `npm run build`.
   - If build fails, fix the error and re-run `npm run build` until it succeeds.

4. **Result**:
   - `dist/` is now the **latest deployment folder**.
   - Deploy by uploading **contents of `dist/`** to the static host.

## Quick checks
- If the user asks “部署資料夾已經是最新的嗎？”:
  - Answer: `dist/` is only updated when `npm run build` ran successfully after the latest code changes.
  - Action: run `npm run build` to guarantee it’s up to date.

## Notes
- Don’t manually edit files inside `dist/`; edit source files (e.g. `components/*.tsx`) then rebuild.
