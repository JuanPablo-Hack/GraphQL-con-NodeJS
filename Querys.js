//Al entrar a localhost:3000/graphql

//Podemos hacer las consultas de los datos con:

//Obtener un curso por ID:

query  getSingleCourse($courseID: Int!){
  curso(id: $courseID){
    Nombre
    Autor
    
  }
  
}

//Query Variables
{
  "courseID":3
}
//Obtener todos los cursos con un Topic Similar
query getCoursesForTopic($courseTopic: String!) {
    courses(topic: $courseTopic) {
      title
      author
      description
      topic
      url
    }
  }
  //Variables
  {
    "courseTopic": "Javascript"
  }
  //Obtener por fragmentos
  query getCoursesWithFragments($courseID1: Int!, $courseID2: Int!) {
    course1: course(id: $courseID1) {
      ...courseFields
    }
    course2: course(id: $courseID2) {
      ...courseFields
    }
  }
  
  fragment courseFields on Course {
    title
    author
    description
    topic
    url
  }
  //Variables
  {
    "courseID1": 1,
    "courseID2": 3
  }
  //Actualizacion de un curso
  mutation updateCourseTopic($id: Int!, $topic: String!) {
    updateCourseTopic(id: $id, topic: $topic) {
      ...courseFields
    }
  }
  
  fragment courseFields on Course {
    title
    author
    description
    topic
    url
  }
  //Variales
  {
    "id":1,
    "topic":"Node.js" 
  }
