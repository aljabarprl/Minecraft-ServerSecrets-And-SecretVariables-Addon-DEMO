import { world, system, ScriptEventCommandMessageAfterEvent } from "@minecraft/server"; //Modul server
import { secrets, variables } from "@minecraft/server-admin"; //Modul server
import { createClient, AuthAdminApi } from "@supabase/supabase-js"; // SQL intregated

// ServerSecrets get method
const discordWebhookUrl = secrets.get('discordWebhookUrl'); //key di secrets.json
const discordBotAPI = secrets.get('authtoken'); 
const DiscordChannelID = secrets.get('ChannelID');

// SecretVariables get method
const DebugMessage = variables.get('debugMesage'); //key di variables.json
const maxPlayers = variables.get('maxPlayers');

// DEBUG
if (!discordWebhookUrl) {
    console.warn("[DiscordFetch] 'discordWebhookUrl' Not Found");
} else {
    console.log("[DiscordFetch] Succes");
}

if (!discordBotAPI) {
    console.warn("[DiscordFetch] 'authtoken' Not Found");
} else {
    console.log("[DiscordFetch] Succes");
}

if (!DiscordChannelID) {
    console.warn("[DiscordFetch] 'ChannelID' Not Found");
} else {
    console.log("[DiscordFetch] Succes");
}

// Script Event
system.afterEvents.scriptEventReceive.subscribe((event: ScriptEventCommandMessageAfterEvent) => {
    //show:variables
    if (event.id === "show:variables") {
        
        world.sendMessage(`§aDebug Message:§r ${DebugMessage}`);
        world.sendMessage(`§aMax Players:§r ${maxPlayers}`);
    }
});

// =========================================Non-DBS============================================== //

// Supabase Conf
const supabaseUrl = 'SUPABASE_URL'; 
const serviceRoleKey = secrets.get('supabaseServiceRoleKey').toString(); //key di secrets.json

if (!serviceRoleKey) {
    console.warn("[Supabase] 'supabaseServiceRoleKey' Not Found");
} else {
    // Client
    const supabase = createClient(supabaseUrl, serviceRoleKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });

    const adminAuthClient = supabase.auth.admin;
    
    async function createSupabaseUser() {
        const { data, error } = await adminAuthClient.createUser({
            email: 'testuser@example.com',
            password: 'password123',
        });
         if (error) {
            console.error("Error creating user:", error.message);
        } else {
            console.log("User created successfully:", data);
         }
     }
     createSupabaseUser();
}

AuthAdminApi.call