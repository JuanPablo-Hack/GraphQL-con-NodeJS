const express = require ('express');
const app = express();

//Mandamos a llamar a los modulos de GraphQL
const {buildSchema} = require('graphql')
const express_graphql= require('express-graphql')
//Requerimos los datos que se crearon de los cursos
const {courses} = require('./datos.json');
console.log(JSON.stringify(courses,null,2));
//Comenzamos a construir un esquema
const schema = buildSchema(`
  type Query {
    course(id: Int!): Course
    courses(topic: String): [Course]
  }
  type Mutation {
    updateCourseTopic(id: Int!, topic: String!,url: String!): Course
  }
  type Course {
    id: Int
    title: String
    author: String
    description: String
    topic: String
    url: String
  }
`);
//Declaramos las funciones
//Obtenemos un curso por su ID
let getCourse = (args) => {
    let id = args.id;
    return courses.filter(course => {
        return course.id == id;
    })[0];
  }
//Obtenemos los cursos por su Topic 
let getCourses = (args) => {
    if (args.topic) {
      let topic = args.topic;
      return courses.filter(course => course.topic === topic);
    } else {
      return courses;
    }
  }
//Actualizamos un curso
let updateCourseTopic = ({id, topic,url}) => {
    courses.map(course => {
      if (course.id === id) {
        course.topic = topic;
        course.url = url;
        return course;
      }
    });
  
    return courses.filter(course => course.id === id)[0];
  }
//Declaramos la raiz
const root = {
    course: getCourse,
    courses: getCourses,
    updateCourseTopic: updateCourseTopic
};
//Comenzamos a crear a las rutas
app.use('/graphql',express_graphql({
    schema: schema,
    rootValue: root,
    graphiql: true

}))



//Inicializamos nuestro servidor en el puerto 3000
app.listen(3000,()=>console.log('Servidor en en el puerto 3000'));