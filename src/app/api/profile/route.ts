const profileData = {
  email: "steve.stevens@stevefoundation.org",
  firstName: "Steve",
  lastName: "Stevens",
}

export async function POST(request: Request) {
  return request
    .json()
    .then((body) => {
      if (body.token === "123") {
        return new Response(JSON.stringify(profileData), { status: 200 });
      }
      return new Response("Unauthorized", { status:401 });
    })
    .catch(() => new Response("Bad Request", { status: 400 }));
}
