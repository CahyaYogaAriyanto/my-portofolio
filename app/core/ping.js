export default async function handler(req, res) {
  await fetch("https://scnmodukpcrmdwlmyozl.supabase.co/rest/v1/portofolio?select=id", {
    headers: {
      apikey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    }
  });
  res.status(200).json({ ping: "ok" });
}
