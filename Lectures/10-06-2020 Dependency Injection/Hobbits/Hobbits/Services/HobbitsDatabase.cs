using Hobbits.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection.Metadata.Ecma335;
using System.Threading.Tasks;

namespace Hobbits.Services
{
    public class HobbitsDatabase
    {

        private readonly List<HobbitModel> hobbits = new List<HobbitModel>();


        public IEnumerable<HobbitModel> GetAll()
        {
            return hobbits;
        }

        public HobbitModel Get(int id)
        {
            return hobbits[id];
        }

        public void Add(HobbitModel hobbitModel)
        {
            hobbits.Add(hobbitModel);
        }
    }
}
