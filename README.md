# POPKINO
### A Movie App built using React Native.
###### by devindu malshan

Background image created using https://imgcreator.zmo.ai/genwitht

App icon made using romannurik/AndroidAssetStudio: A set of web-based tools for generating graphics and other assets that would eventually be in an Android application's res/ directory. (github.com)https://github.com/romannurik/AndroidAssetStudio

(Referred document) : Change App Icon in React Native for Android and iOS - About React 
https://aboutreact.com/react-native-change-app-icon/

My Github Account: https://github.com/devindu22

contact me: devindu.m@outlook.com / devindu.nwcv@gmail.com

### Final Assignment of Rapid Mobile Application Development Course - Batch 03
#### Provided by IJSE - Lecturer Mr.Shanilka Liyanage

 Assignment Title: React Native Movie App
 
 Develop an app that loads movies from an API, searches for movies through API, and saves movies to a favorite list.

## Content: 

### 1. App Architecture
### 2.Walkthrough Visual Components and Navigation
### 3.Development
### 4. Detailed Description Of The POPKINO App UI
### 5. src/screenshots

### 1. App Architecture

● Splash screen
● Introduction page
● Sign up page
● Sign in page
● Movie carousel page
● MovieList page
● Movie Search Page
● Movie Details screen
● Movie trailer page
● Watch the later page

### 2.Walkthrough Visual Components and Navigation

POPKINO, the application, includes a splash screen leading to an introduction page, offering
users the option to sign up or sign in via Apple or Google authentication. Upon signing up,
users are directed to a login page with the same authentication options.

The introduction page provides access to the Movie carousel, featuring four carousels of top-rated, trending, popular, and upcoming movies. Tapping on a movie box opens a popup card,
displaying larger images, a title, and a brief overview. A "load more" option lets users view more movies in a vertical list.

The application features three primary bottom tabs, allowing users to move between the movie
carousel, movie search, and "watch later" screens. The movie search tab enables users to search
for movies of their choice, and selecting a movie navigates the user to the movie details page.
This page includes the chosen movie's image, title, ratings, overview, cast, similar movies, and
a "play trailer" button.

The movie details page also includes an outlined bookmark icon on the top right corner, which,
upon tapping, fills up with a red color and directs the user to the "watch later" screen, displaying
the saved movies' image and title. Additionally, the "play trailer" button navigates the user to the
movie trailer screen, allowing the selected movie trailer to be watched via YouTube.

The "watch later" screen also includes a close button on the top left corner, allowing users to remove unwanted saved movies.

### 3.Development

The app POPKINO was developed using:

● React Native (https://reactnative.dev/)

● Axios (https://axios-http.com/docs/intro)

● The Moviedb API (https://developers.themoviedb.org/)

● And the basic react native components (async storage, bottom tabs, native, native
stack, gesture handler, linear gradient, reanimated, safe area context, screens,
svg, vector icons, and webview)

### 4. Detailed Description Of The POPKINO App UI

#### 1. Splash Screen

This React Native functional component is named "Splash", and serves as a splash screen for the UI application “POPKINO”.

The component imports various React Native components and modules, such as "SafeAreaView", "StyleSheet", "StatusBar", "Text", "AsyncStorage", and "Route". It also imports a custom module named "CommonStyles" that contains common style definitions for the application.

The "Splash" component contains a "React.useEffect()" hook that runs after the component mounts. This hook sets a timeout of 2.5 seconds before checking whether a user exists in AsyncStorage. The component navigates to the "TAB_HOME" screen if a user exists. Otherwise, it navigates to the "WELCOME" or introduction screen.

The "Splash" component returns a "SafeAreaView" component with a "Text" component displaying the text "POPKINO". The "Text" component has several custom styles defined in the "styles" object, including a custom font, font size, color, and text-shadow!
. The component also has a "logo" style, which is not used in the returned JSX.


#### 2. Welcome Screen/ Introduction Page

This screen component is named Welcome. The component contains UI elements such as an image background, text, buttons, and a login button group. This component displays a welcome screen for the movie app “POPKINO” when rendered.

The Welcome component takes in a navigation prop, which allows it to navigate between different screens of the app using React Navigation.

The render method of the component returns a SafeAreaView component, which provides a safe area for rendering content on the screen. Inside the SafeAreaView is an ImageBackground component that displays a background image for the screen.

The background image is styled using StyleSheet to fill the height and width of the screen. Also made with the help of AI (https://imgcreator.zmo.ai/genwitht). The LinearGradient component overlays the image with a semi-transparent gradient to make the text more legible.

Inside the LinearGradient, there is a View component that wraps the rest of the UI elements of the screen. These elements include:

● ActionButton component, which is a custom button component that takes in a title prop, an onPressBtn function, customStyle prop, and customTextStyle prop. This button is used to skip the welcome screen and navigate to the home screen of the app.

● Text component displaying the title of the app.

● Another text component displaying a subtitle for the app.

● View component containing a horizontal divider and text for the sign-in section.

● LoginButtonGroup component, which is a custom component that displays login buttons for your user accounts by Apple and Google.

● ActionButton component used to navigate to the sign-up screen.

● View component containing text and an ActionButton component used to navigate to the sign-in screen.


The UI elements are styled using StyleSheet. The component makes use of a CommonStyles object that contains common styles used throughout the app, including colors, fonts, and dimensions.

The Welcome component exports itself as a default module, making it available to other parts of the app that need to render it.


#### 3. SignUp Screen 

The Signup screen is made with input fields for full name, email, and password. When the user presses the "SIGN UP" button, the data entered by the user is stored in the device's local storage using the AsyncStorage (https://reactnative.dev/docs/asyncstorage) API.

The component imports several components from the react-native library and other custom components and also imports some assets such as images and icons.

The state of the component is managed using the useState hook, which initializes the fullName, email, password, and showPW variables. fullName, email, and password are updated through onChangeText handlers passed to the CustomTextInput components. showPW is a boolean variable that determines whether the password field should be shown or hidden.
The showPassword function toggles the value of showPW when the user presses the "show password" icon which is pretty obvious because it's an ‘eye’.

The storeData function creates an object with the user's data and stores it in local storage as a JSON string. The try...catch block is used to handle errors that might occur when storing data.
The component renders a SafeAreaView that contains an ImageBackground and several Text components that display labels for the input fields. The CustomTextInput components are rendered with props that set the titles and values of the input fields and pass the onChangeText handlers. The ActionButton component is rendered again with props that set the button text and style and pass the onPressBtn handler. The LoginButtonGroup component is also used to render buttons for login with user services. (google and Apple)

Finally, the component renders a View that displays a "Already have an account?" text with a "Login" button that navigates to the login screen when pressed. The divider Container displays a horizontal line with text in between and the footerTextContainer displays a centered "Already have an account?" text with an underlined "Login" button.


#### 4. Sign In / Login Screen 


The Sign-in screen contains a login form with two input fields for email and password imported from the CustomTextInput Component, a button to submit the form, and social login buttons. The component imports various other components, such as "LoginButtonGroup", and "ActionButton", as well as some styles from the "CommonStyles" module.

The component also uses "AsyncStorage" to retrieve user credentials that were previously stored in the device's local storage. If the entered email and password match the stored credentials, the user is navigated to the home screen, otherwise, an error message is logged in the console.


#### 5. Home Screen / Movie Carousel Tab

This tab displays a scrollable four lists of movies. The movies are fetched from the API provided by themoviedb and organized into four categories: top-rated, trending, popular, and upcoming. Each category is displayed in a separate horizontal scroll view. When a user taps on a movie poster, a modal window appears with more information about the movie, including its title, poster, and plot summary. The user can close the modal by tapping on a close button in the top right corner of the modal window.

The code uses React hooks to manage state. useState hooks are used to store the movie data and the state of the selected movie and the modal. An useEffect hook is used to fetch the movie data from the API when the component mounts. The useNavigation hook is used to navigate between screens in the app. The page also uses the Axios library to make HTTP requests to the themoviedb.org API, the TouchableOpacity component to handle taps on the movie posters, and the Modal component to display the movie information.

The screen uses the StyleSheet module to define the styles for the components. The styles include the background color of the container, the margin and font size of the carousel titles, the size and spacing of the movie posters, and the styles for the modal window.

Overall, the screen is a simple and functional React Native component that displays a list of movies and allows the user to view more information about each movie.


#### 6. Load More List 

In the MovieList screen which fetches and displays a list of top-rated movies using the API provided by The Movie Database (TMDb).

It has the following features:

● Uses the useState hook to store the movie data in the movies state variable, the current page number in the currentPage state variable, and the total number of pages in the totalPages state variable.

● Uses the useEffect hook to fetch the initial set of movies when the component mounts.

● Uses the FlatList component to render the list of movies.

● Uses the renderMovie function to render each movie item in the list.

● Displays the movie title, poster image, and rating in the list item.

● Uses the Icon component from the react-native-vector-icons library to display a star icon for each rating point.

● Allows the user to load more movies by clicking the "Load More" button at the bottom of the list, using the onEndReached and onEndReachedThreshold props of FlatList.


#### 7. MovieFile Screen / Movie Search Tab

This tab allows a user to search for movies using The Movie Database API, and display the search results in a FlatList (https://reactnative.dev/docs/flatlist). The user can then select a movie from the list to view its details or add it to a watch later list.

The component imports various React Native UI components such as TextInput, Button, FlatList, Text, Image, and TouchableOpacity, as well as the useNavigation hook from the '@react-navigation/native' library. It also defines a constant API_KEY (https://stackoverflow.com/questions/18205134/what-is-the-api-key-and-how-do-i-use-it-correctly), which is used to access The Movie Database API.

The component uses the useState hook to manage state variables. The searchQuery state variable stores the user's input in the search bar, while the movies state variable stores the search results.
When the user presses the search button, the handleSearch function is called, which sends a GET request to the API using the fetch function. The response is then parsed as JSON and stored in the movies state variable.

The renderMovie function is used to render each movie item in the FlatList. It displays the movie's poster and title, and when the user taps on it, it calls the handleSelectMovie function to navigate to the MovieDetails screen.

When the user taps on the "Add to Watch Later" button, it calls the handleAddToWatchLater function to navigate to the WatchLaterList screen and pass the selected movie as a parameter.
Overall, this component provides a simple interface for searching and browsing movies and allows the user to easily view more details about a movie or add it to their watch later list.


#### 8. MovieDetails Screen

The MovieDetails screen is displaying details of a movie, including its title, poster, rating, genres, overview, cast, and similar movies. The component fetches the cast and a similar movie![004signup]
 data from the TMDB API and stores the watch-later list in the local storage of the device.

The component consists of a ScrollView that wraps a View containing the movie poster, play button, movie details (title, rating, genres, overview), watch later button, cast container, and similar movies container.

The component receives the movie data as a parameter from the parent component using React Navigation. The cast and similar movie data are fetched using the useEffect hook and Axios library.

The handleWatchLater function is called when the user clicks the watch later button, which toggles the button's icon and adds/removes the movie to/from the watch-later list stored in the local storage. The handlePlayTrailer function is called when the user clicks the play button, which navigates the user to the movie trailer screen.

Overall, the component provides a user-friendly interface for displaying movie details, links to YouTube API to watch trailers, and allows the user to save movies for later viewing.


#### 9. Movie Trailer Screen

This screen displays a movie trailer using the YouTube API. Here are the features:

● The component MovieTrailerScreen receives a route prop that contains information about the movie.

● The component uses the useState hook to define a trailerKey state variable which will be used to store the trailer video ID.

● The component uses the useEffect hook to fetch the movie trailer information from the TMDB API when the component mounts or when the movie prop changes.

● If a trailer video is found, its ID is stored in the trailerKey state variable using the setTrailerKey function.

● The component renders a loading message if the trailerKey is null.

● If the trailerKey is not null, the component renders a WebView component that loads the YouTube video using the trailerKey as the ID.

● The styles object defines some basic styles for the container. 

Overall, this component fetches the movie trailer from the TMDB API and displays it in a WebView component using the YouTube API. It also handles loading states and error handling using try/catch blocks.


#### 10. Watch Later Tab

This is the final screen and the last bottom tab  for displaying a list of movies that the user has added to their watch later list. The list is stored in AsyncStorage and retrieved when the component mounts. The component renders a FlatList of the movies, with each item displaying a poster image and the movie title. Each item also has a "remove" button that allows the user to remove the movie from their watch later list.

The component has two useEffect hooks, one for retrieving the watch later list from AsyncStorage and another for updating the list in AsyncStorage when it changes. The component also has three helper functions: handleRemoveMovie for removing a movie from the watch later list, addMovieToWatchLaterList for adding a movie to the list, and renderItem for rendering each item in the FlatList. The component also has some styles defined using StyleSheet.

Overall, this component provides a basic functionality for managing a watch-later list of movies in the POPKINO app.


### 5. src/screenshots

Check out the screenshots file for a UI sneak peek!

App Icon

<img src="https://github.com/devindu22/POPKINO/assets/114844896/fddf684a-592d-4758-81bb-777767cb69ab" width=25% height=25%>

Splash

<img src="https://github.com/devindu22/POPKINO/assets/114844896/0c6d9bda-2cae-4a13-ab8c-aff288544211" width=25% height=25%>

Sign Up Skip

<img src="https://github.com/devindu22/POPKINO/assets/114844896/dafe3330-8024-4374-b663-76b0989b7707" width=25% height=25%>

Sign Up Form

<img src="https://github.com/devindu22/POPKINO/assets/114844896/38de7d95-32ca-4f53-be98-4d01fe308c26" width=25% height=25%>

Home / Browse

<img src="https://github.com/devindu22/POPKINO/assets/114844896/fbc6259c-fb47-4592-9ad1-caee2a4c8c7f" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/f67ccdce-c565-422d-90bd-c19f5bab17c2" width=25% height=25%>

Brief Description of the movie 

<img src="https://github.com/devindu22/POPKINO/assets/114844896/cf337339-be17-43fa-a254-6466a512459f" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/36e932be-54e8-4444-887c-1798969f55aa" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/1e38858d-a4a8-44d8-8a87-e40caf252264" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/31b0f55b-9eae-4e9d-b961-9ee7e7f931f4" width=25% height=25%>

Search

<img src="https://github.com/devindu22/POPKINO/assets/114844896/d599fe84-423b-4a13-9bea-f2b27ebf7f0e" width=25% height=25%>

Search Results

<img src="https://github.com/devindu22/POPKINO/assets/114844896/b3758866-26a8-4001-b51c-8e85590887f0" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/4722c735-9886-44bb-a0c3-1348f531ea88" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/88716d04-8625-4ffe-bfd8-e04939dd3b5c" width=25% height=25%>

Full Description of the Movie 

<img src="https://github.com/devindu22/POPKINO/assets/114844896/8ec794ec-6034-4ec6-8e9f-f2d89bfa2e45" width=25% height=25%>
<img src="https://github.com/devindu22/POPKINO/assets/114844896/132d56b6-3e43-466b-9a4d-cf0bb314f1d1" width=25% height=25%>

Watch Later

<img src="https://github.com/devindu22/POPKINO/assets/114844896/c3944aa3-f7ca-44eb-be21-8360731f4b72" width=25% height=25%>

More Button - Movie List

<img src="https://github.com/devindu22/POPKINO/assets/114844896/4f9fa1df-19f7-4a63-a275-a82a3af3bb69" width=25% height=25%>

Trailer button

<img src="https://github.com/devindu22/POPKINO/assets/114844896/e5f95c0c-26b6-4b6e-8ffd-4e1f04723195" width=25% height=25%>

Trailer Video Screen

<img src="https://github.com/devindu22/POPKINO/assets/114844896/5a2f7c1d-2502-4677-91b3-baa7704f8d74" width=25% height=25%>

### FYI the screenshots were taken while in the dark mode of the device.
