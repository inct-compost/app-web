import useSupabase from '../plugin/supabase'

export default async function getSensingData () {
  const { supabase } = useSupabase()
  const { data, error, status } = await supabase.from('sensingData').select('*')
  const sensingData = data
  const sensingDataError = error
  const sensingDataStatus = status

  return {
    sensingData,
    sensingDataError,
    sensingDataStatus,
  }
}
