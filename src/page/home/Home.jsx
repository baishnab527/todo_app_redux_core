import { IoListOutline } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import { IoSend } from "react-icons/io5";
import "./Home.scss";
import { useEffect, useState } from "react";
import {
  actonColor,
  am_pm,
  day,
  hour,
  month,
  munite,
  years,
} from "../../helper/helper";
import { useDispatch, useSelector } from "react-redux";
import { createNewTodo, deleteTodo, getAllTodo, updateTodos } from "../../redux/todo/action";

// create a Home component;
const Home = () => {
  // control action button  by useState;
  const [actionButton, setActonButton] = useState(false);
  const [todoForm, setTodoForm] = useState(false);
  const [update, setUpdate] = useState(false);
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todo);

  // showCreateTodoForm;
  const showCreateTodoForm = () => {
    setTodoForm(true);
  };

  // handleUpdateTodo ;
  const handleUpdateTodo = (item) =>{
    setTodoForm(true);
    setInput(item);
    setUpdate(true)
  }

  // for input form management;
  const [input, setInput] = useState({
    name: "",
    day: "",
    month: "",
    year: "",
    hour: "",
    munite: "",
    am_pm: "",
    action: "",
  });
  const handleInputChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

  
    if(update){
      dispatch(updateTodos(input));
      setUpdate(false);
      setTodoForm(false);
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    }else{
      dispatch(createNewTodo(input));

      // Input empty
      setInput({
        name: "",
        day: "",
        month: "",
        year: "",
        hour: "",
        munite: "",
        am_pm: "",
        action: "",
      });

      setTodoForm(false);
    }
  };


  // delete todo data ;
  const handleTodoDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  // update todo form;

  // controll the side effect
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);
  // create a function
  return (
    <>
      <div className="todo">
        <div className="container todo-container">
          <div className="todo-app-area">
            <div className="todo-app">
              <div className="todo-app-top">
                <div className="navigation-bar-left">
                  <button onClick={() => setActonButton(true)}>
                    {" "}
                    <IoListOutline />{" "}
                  </button>
                </div>

                {actionButton && (
                  <div className="todo-action-menu">
                    <button onClick={() => setActonButton(false)}>
                      Pending
                    </button>
                    <button onClick={() => setActonButton(false)}>
                      Complite
                    </button>
                    <button onClick={() => setActonButton(false)}>
                      Delete
                    </button>
                  </div>
                )}

                <div className="navigation-bar-right">
                  <h4>Tudu</h4>
                </div>
              </div>

              {todoForm && (
                <div className="todo-app-form">
                  <form action="#" onSubmit={handleFormSubmit}>
                    <div className="input-bar">
                      <input
                        type="text"
                        placeholder="Write your todo"
                        name="name"
                        value={input.name}
                        onChange={handleInputChange}
                      />
                      <button type="submit">
                        {" "}
                        {update ? <RxUpdate /> : <IoSend />}
                      </button>
                    </div>

                    <div className="day-month-year">
                      <select
                        name="day"
                        id="#"
                        value={input.day}
                        onChange={handleInputChange}
                      >
                        <option disabled>Day</option>
                        {day
                          ? day.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={new Date().getDate === item}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>

                      <select
                        name="month"
                        id="#"
                        value={input.month}
                        onChange={handleInputChange}
                      >
                        <option disabled selected>
                          month
                        </option>
                        {month
                          ? month.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={new Date().getMonth() === index}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>

                      <select
                        name="year"
                        id=""
                        value={input.year}
                        onChange={handleInputChange}
                      >
                        <option disabled>year</option>

                        {years
                          ? years.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={new Date().getFullYear() === item}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                      <select
                        name="action"
                        id=""
                        value={input.action}
                        onChange={handleInputChange}
                      >
                        <option selected disabled>
                          action
                        </option>
                        <option value="pending">Pending</option>
                        <option value="complite">Complite</option>
                        <option value="delete">Delete</option>
                      </select>
                    </div>

                    <div className="hour-minit-am-pm">
                      <select
                        name="hour"
                        id="#"
                        value={input.hour}
                        onChange={handleInputChange}
                      >
                        <option disabled>Hours</option>
                        {hour
                          ? hour.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={new Date().getHours() === item}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>

                      <select
                        name="munite"
                        id="#"
                        value={input.munite}
                        onChange={handleInputChange}
                      >
                        <option disabled>Munites</option>
                        {munite
                          ? munite.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={new Date().getMinutes() === item}
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>

                      <select
                        name="am_pm"
                        id="#"
                        value={input.am_pm}
                        onChange={handleInputChange}
                      >
                        <option disabled>Munites</option>
                        {am_pm
                          ? am_pm.map((item, index) => {
                              return (
                                <option
                                  key={index}
                                  value={item}
                                  selected={
                                    new Date().getHours() >= 12 ? "Am" : "Pm"
                                  }
                                >
                                  {" "}
                                  {item}{" "}
                                </option>
                              );
                            })
                          : ""}
                      </select>
                    </div>
                  </form>
                </div>
              )}

              {/* lets show the todo item here; */}

              <div className="todo-item-show-area">
                <ul>
                  {todos.map((item, index) => {
                    return (
                      <li key={index}>
                        {" "}
                        <p>
                          {" "}
                          <span
                            style={{ backgroundColor: actonColor(item.action) }}
                          >
                            {" "}
                          </span>{" "}
                          {item.name}{" "}
                          <small>
                            {item.day}/{item.month}/ {item.year} - {item.hour}:
                            {item.munite}. {item.am_pm}{" "}
                          </small>
                        </p>{" "}
                        <button>
                          <MdDelete onClick={() => handleTodoDelete(item.id)} />{" "}
                          <FaUserEdit onClick={() => handleUpdateTodo(item)}  />
                        </button>{" "}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <div className="todo-app-bottom">
              <button className="createButton" onClick={showCreateTodoForm}>
                {" "}
                <AiOutlinePlus />{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// export default home ;
export default Home;
