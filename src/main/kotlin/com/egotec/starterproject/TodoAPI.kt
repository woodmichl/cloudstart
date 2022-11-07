package com.egotec.starterproject

import com.egotec.starterproject.entity.TodoEntity
import javax.ws.rs.*
import javax.ws.rs.core.MediaType
import javax.ws.rs.core.Response

@Path("/todo")
class TodoAPI {

    @GET
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun getTodo(@PathParam("id") id: String): TodoEntity {
        val state = ThreadState.begin()
        return state.em.find(TodoEntity::class.java, id.toLong())
            ?: throw WebApplicationException(Response.Status.NOT_FOUND)
    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun createTodo(todoEntity: TodoEntity): TodoEntity {
        val state = ThreadState.begin()
        state.em.transaction.begin()
        state.em.persist(todoEntity)
        state.em.transaction.commit()
        return todoEntity
    }

    // TODO:
    // getAllTodos
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    fun getTodoList(): List<TodoEntity> {
        val state = ThreadState.begin()
        return state.em.createQuery("select a from TodoEntity a", TodoEntity::class.java).resultList
    }

    // deleteTodo
    @DELETE
    @Path("{id}")
    @Produces(MediaType.APPLICATION_JSON)
    fun deleteTodo(@PathParam("id") id: String): Boolean {
        val state = ThreadState.begin()
        val toRemove = state.em.find(TodoEntity::class.java, id.toLong())
            ?: throw WebApplicationException(Response.Status.NOT_FOUND)
        state.em.transaction.begin()
        state.em.remove(toRemove)
        state.em.transaction.commit()
        return true
    }

    // updateTodo
    @PATCH
    @Path("{id}")
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    fun updateTodo(@PathParam("id") id: String, todoEntity: TodoEntity?): Boolean {
        if (todoEntity == null) {
            throw WebApplicationException(Response.Status.BAD_REQUEST)
        }
        val state = ThreadState.begin()
        val toUpdate = state.em.find(TodoEntity::class.java, id.toLong())
            ?: throw WebApplicationException(Response.Status.NOT_FOUND)
        state.em.transaction.begin()
        toUpdate.content = todoEntity.content ?: toUpdate.content
        toUpdate.name = todoEntity.name ?: toUpdate.name
        toUpdate.done = todoEntity.done
        state.em.transaction.commit()
        return true
    }
}