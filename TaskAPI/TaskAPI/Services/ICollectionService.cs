using Microsoft.AspNetCore.Http.HttpResults;

namespace TaskAPI.Services
{
    //Namespace: TaskAPI.Services
    //Aceasta organizează clasele și interfețele legate de serviciile aplicației TaskAPI.
    //Interfața: ICollectionService<T>
    //Este o interfață generică publică care definește un set de operații CRUD (Create, Read, Update, Delete) pentru colecții de obiecte de tip generic T
    public interface ICollectionService<T>
    {
        Task<List<T>> GetAll();
        Task<T> Get(Guid id);
        Task<bool> Create(T model);
        Task<bool> Update(Guid id, T model);
        Task<bool> Delete(Guid id);

    }
}
