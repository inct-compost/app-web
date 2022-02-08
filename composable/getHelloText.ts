import useSupabase from '../plugin/supabase'

export default async function getHelloText () {
  const { supabase } = useSupabase()
  const { data, error, status } = await supabase.rpc('hello_world')
  const HelloText = data
  console.log(HelloText)
  const sensingDataError = error
  const sensingDataStatus = status

  return {
    HelloText,
    sensingDataError,
    sensingDataStatus,
  }
}
