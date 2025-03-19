Vient de la documentation de [SebPautot](https://github.com/SebPautot)

# myges-documentation
Documentation for the MyGES API

I only maintain the GO part, some of the endpoint might not be available in the JS part..

## Authenticate a user and get a token
GET https://authentication.kordis.fr/oauth/authorize?response_type=token&client_id=skolae-app
### Headers
Authorization : Basic {credentials}

*Convert a string with the value <b>username:password</b> to Base64 to get the appropriate value of {credentials}

You should get a redirect address, the value query parameter <b>access_token</b> of the redirection address (comreseaugesskolae:/oauth2redirect#) is the token you need to use. In the documentation the token will be called {token}, you will need to replace {token} with your own token value.

## Use the token to get and modify user informations

All endpoints listed require an Autorization header with the value :

bearer {token}

<br><br>
## Personnal / Student :

### GET https://api.kordis.fr/me/year
Get all the start year when you were in the school (years 2024/2025 => give 2024)

### GET https://api.kordis.fr/me/{year}/absences

### GET https://api.kordis.fr/me/agenda?start={startTime}&end={endTime}
startTime: the start time in milliseconds since the Unix Epoch
endTime : the end time in milliseconds since the Unix Epoch

### GET https://api.kordis.fr/me/{year}/classes

### GET https://api.kordis.fr/me/{year}/courses

### GET https://api.kordis.fr/me/{year}/grades

### GET https://api.kordis.fr/me/{year}/projects

### GET https://api.kordis.fr/me/profile


<br><br>
## Global

### GET https://api.kordis.fr/me/news

### GET https://api.kordis.fr/me/news/banners

### GET https://api.kordis.fr/me/news?page={page}

### GET https://api.kordis.fr/me/{year}/classes

### GET https://api.kordis.fr/me/classes/{classeId}/students

### GET https://api.kordis.fr/me/students/{studentId}

### GET https://api.kordis.fr/me/{year}/teachers


<br><br>
## Projects

### GET https://api.kordis.fr/me/project/{id}

Join project Group
### POST https://api.kordis.fr/me/courses/{projectRcId}/projects/{projectId}/groups/{projectGroupId}

Leave project Group
### DELETE https://api.kordis.fr/me/courses/{projectRcId}/projects/{projectId}/groups/{projectGroupId}

