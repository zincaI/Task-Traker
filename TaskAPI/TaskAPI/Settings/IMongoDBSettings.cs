namespace TaskAPI.Settings
{

    //Această interfață IMongoDBSettings definește un contract pentru a obține și seta setările necesare pentru conectarea la o bază de date MongoDB.
    public interface IMongoDBSettings
    {
        string TasksCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }

    }
}
