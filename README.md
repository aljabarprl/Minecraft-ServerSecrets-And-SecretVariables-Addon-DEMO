# Minecraft/server-admin Demo Project

Addon scripting untuk Minecraft BDS menggunakan **TypeScript**.  
Fitur utama:
- ServerSecrets, SecretVariables, AuthAdmin API (`DEMO`)
- DEBUG Per-SecretStrings
- Ditulis dalam **TypeScript**, compile ke **JavaScript** untuk dijalankan di BDS.

## Struktur
- **BP/** → Behavior Pack (script dan logic addon)
- **scripts/** → Source TypeScript (`main.ts`) + hasil compile (`main.js`)

## BDS Config
- **Config/Default/secrets.json** → Berisi token/API key
- **Config/Default/variables.json** → Berisi secret variables key

## Cara Install Ke DBS
1. Compile script TypeScript (`tsc`) → hasil ke folder `BP/scripts/`. (atau jika tidak ingin develop compile bisa langsung ke step 2)
2. Pindahkan Folder `BP` ke folder `development_behaviour_packs` di DBS
3. Pada folder `World/(Your server)` taruh `pack_id` dan `version` addon ini ke file `world_behavior_packs.json` 
4. Pastikan *Enable Beta APIs* aktif, di `server.properties` pastikan set `experimental-gameplay=true`, `content-log-file-enabled=true` dan `script-engine=experimental`
5. Addon Siap Di Set Di DBS

# Notes
- Modul only allowed in Bedrock Dedicated Server.