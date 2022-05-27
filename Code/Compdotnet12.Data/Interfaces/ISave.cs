namespace Compdotnet12.Data.Interfaces
{
    public interface ISave<in T> where T : class
    {
        void Save(T entity);
    }
}
