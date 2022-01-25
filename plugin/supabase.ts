import { useContext } from "@nuxtjs/composition-api"
import { createClient } from "@supabase/supabase-js/dist/main/index.js"

export default function useSupabase() {
  const { $config } = useContext()
  const supabase = createClient(
    $config.supabaseUrl as string,
    $config.supabaseKey as string,
  )

  return {
    supabase,
  }
}
