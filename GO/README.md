# Go Class to Access the MyGes API

The GesAPI project is a GO library that allows interaction with the MyGES API. It's based on the JS/Typescript myges-cli version by [quantumsheep](https://github.com/quantumsheep/myges-cli).

## Initialization
Just copy and paste the GesApi.go into a Go project, wherever you want.

## Instantiation of the Class

The `GESLogin` function takes two parameters: the username and the password. It returns an instance of the `GESapi` class.

```go
api, err := GESLogin("username", "password")

```

The `GESapi` class provides access to the following methods:
> - GetYears() (string, error): Retrieves a list of academic years available for the user. Returns a JSON string containing the years.
> - GetProfile() (string, error): Fetches the user's profile information. Returns a JSON string with user details such as name, email, and other relevant information.
> - GetAgenda(start string, end string) (string, error): Retrieves the user's agenda for a specified date range. The start and end dates should be in the format "2006-01-02T15:04:05.000Z". Returns a JSON string containing agenda items.
> - GetAbsences(year string) (string, error): Fetches the user's absences for a specific academic year. Returns a JSON string with absence records.
> - GetGrades(year string) (string, error): Retrieves the user's grades for a specific academic year. Returns a JSON string containing grade information.
> - GetCourses(year string) (string, error): Fetches the courses associated with the user for a given academic year. Returns a JSON string with course details.
> - GetProjects(year string) (string, error): Retrieves projects associated with the user for a specific academic year. Returns a JSON string containing project details.
> - GetProject(id int64) (string, error): Fetches detailed information about a specific project identified by its ID. Returns a JSON string with project information.
> - GetNews() (string, error): Fetched all your current MyGes News
> - GetBanners() (string, error): Idk why you want to use that but it exists...
> - GetNewsPage() (string, error): I know it works, but I never used it, so idk..
> - GetYearClasses(year string) (string, error): Fetch all the existing classes from a specific year
> - GetYearTecher(year string) (string, error) : Fetch all the teacher from a specific year
> - JoinProjectGroup(projectRcId int64, projectId int64, projectGroupId int64) (string, error): Allows the user to join a specific project group identified by its IDs. Returns a JSON string indicating success or failure.
> - QuitProjectGroup(projectRcId int64, projectId int64, projectGroupId int64) (string, error): Allows the user to leave a specific project group identified by its IDs. Returns a JSON string indicating success or failure.

Datas are send back as a string, which is a JSON.

__**Example**__

```go
user, err := GESLogin("username", "password")

// You can now use the methods
year := "2024-03-02"
result, err := user.GetProfile()
result2, err2 := user.GetYears(year)
// Etc...

```


## Note
Some of these methods may have bugs or may not work as expected. Please report any issues you encounter.
I will only be able to patch any issues until July 2027.
Don't forget to change the name of the package at the top of the file if needed.




## Plan to be added
> - NEWS("/me/news"),
> - TEACHERS("/me/{year}/teachers"),
> - NEWS_BANNERS("/me/news/banners"),
> - CLASSES("/me/{year}/classes"),
> -  STUDENTS("/me/classes/{classeId}/students"), ?
> -  STUDENT("/me/students/{studentId}"); ?
