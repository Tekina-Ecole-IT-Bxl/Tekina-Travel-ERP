export const ping = ( req, res ) => {
  res.json({ status: "ok", ts: Date.now() })
}
