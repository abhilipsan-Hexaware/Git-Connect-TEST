using System.Collections.Generic;

namespace Compdotnet12.Data.Interfaces
{
    public interface IGetAll<T> where T : class
    {
        IEnumerable<T> GetAll();
    }
}
