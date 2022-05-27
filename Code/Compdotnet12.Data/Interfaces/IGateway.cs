using MongoDB.Driver;

namespace Compdotnet12.Data.Interfaces
{
    public interface IGateway
    {
        IMongoDatabase GetMongoDB();
    }
}
