using TaskAPI.Models;

namespace TaskAPI.Services
{
    //Acest cod definește o interfață specifică pentru colecția de task-uri, ITaskCollectionService, care extinde interfața generică ICollectionService
    //pentru tipul TaskModel și adaugă o metodă suplimentară pentru obținerea task-urilor după status.
    public interface ITaskCollectionService: ICollectionService<TaskModel>
    {
        Task<List<TaskModel>> GetTasksByStatus(string status);
    }
}
