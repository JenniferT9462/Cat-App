// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const q = req.query;
  const friend = q.friend;
  console.log(q);
  res.status(200).json({ 
    name: "Roger Rabbit",
    address: "123 McDonald Ave",
    hasCat: true,
    likesSprouts: false,
    friend: friend
   });
}
