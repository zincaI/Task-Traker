using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using TaskAPI.Models;
using TaskAPI.Services;

namespace TaskAPI.Controllers
{
    /// <summary>
    /// task controller
    /// </summary>

    // [ApiController]: Este un atribut care marchează clasa ca fiind un controller API
    //[Route("[controller]")]: Specifică ruta pentru acest controller. 
    [ApiController]
    [Route("[controller]")]

    //moștenește funcționalitățile de bază ale unui controller API (ControllerBase
    public class TaskController : ControllerBase
    {
        ITaskCollectionService _taskCollectionService;

        public TaskController(ITaskCollectionService taskCollectionService)
        {
            //Atribuie parametrul primit câmpului privat _taskCollectionService, aruncând o excepție dacă parametrul este null
            _taskCollectionService = taskCollectionService ?? throw new ArgumentNullException(nameof(TaskCollectionService));
        }

        /// <summary>
        /// returns all tasks
        /// </summary>
        /// <returns></returns>
        
        [HttpGet] //Atribut care specifică faptul că această metodă răspunde la cereri HTTP GET.(aceasta primeste returnarea de la functia de mai jos)
        public async Task<IActionResult> GetTasks()
        {
            List<TaskModel> tasks = await _taskCollectionService.GetAll();//Așteaptă și obține lista tuturor task-urilor din serviciu.
            return Ok(tasks);
        }


        /// <summary>
        /// adds a task
        /// </summary>
        /// <param name="task"></param>
        /// <returns></returns>
        [HttpPost]
        public async Task<IActionResult> CreateTask([FromBody] TaskModel task)
        {
            await _taskCollectionService.Create(task);
            return Ok(task);
        }

        /// <summary>
        /// replaces the task that has the matching id with the sent task
        /// </summary>
        /// <param name="task"></param>
        /// <returns></returns>
        [HttpPut]
        public async Task<IActionResult> UpdateTask([FromBody] TaskModel task)
        {
            await _taskCollectionService.Update(task.Id, task);
            return Ok(task);
        }

        /// <summary>
        /// deletes task with matching id
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(Guid id)
        {
            bool deleted = await _taskCollectionService.Delete(id);
            
            if (!deleted)
                return NotFound();

            return Ok(200);
        }

    }
}
