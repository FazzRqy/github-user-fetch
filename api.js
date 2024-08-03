const apiUrl = "https://api.github.com/users/FazzRqy"

fetch(apiUrl)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error("Request Error")
  })
  .then(data => {
const { avatar_url, login, url, type, name, location, bio, public_repos, followers, following, created_at, update_at} = data
  
  const txt = `
Username:\t${login || "Unknown"}
Url:\t\t${url || "Not Found"}
Type:\t\t${type || "Unknown"}
Name:\t\t${name || "Unknown"}
Location:\t${location || "Unknown"}
Bio:\t\t${bio || "Unknown"}
Public Repos:\t${public_repos || "Not Found"}
Followers:\t${followers || "0"}
Following:\t${following || "0"}
    `
    
    console.log(txt)
  })
  .catch(error => {
    console.log("error: " + error)
  })