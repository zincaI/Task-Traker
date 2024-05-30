namespace TaskAPI.Settings
{
    //Acest cod definește o clasă MongoDBSettings care implementează interfața IMongoDBSettings
    public class MongoDBSettings : IMongoDBSettings
    {
        public string TasksCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName {  get; set; }
    }
}
