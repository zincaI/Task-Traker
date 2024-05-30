using System.Reflection.PortableExecutable;
using System.Security.Claims;

namespace TaskAPI.Models
{

    //Acest cod definește un model de date pentru task-uri în cadrul aplicației TaskAPI.

    //Enumerarea Status: Este folosită pentru a reprezenta diferitele stări posibile ale unui task (de exemplu, "De făcut", "În desfășurare", "Finalizat").
   // Clasa TaskModel: Este o reprezentare a unui task și conține proprietăți precum Id, Title, Description, AssignedTo și Status.Fiecare proprietate reprezintă o caracteristică a unui task, iar Id este folosit pentru a identifica unic fiecare task.
    public enum Status
    {
        ToDo,
        InProgress,
        Completed
    }
    public class TaskModel
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string AssignedTo { get; set; }
        public string Status { get; set; }

    }
}
