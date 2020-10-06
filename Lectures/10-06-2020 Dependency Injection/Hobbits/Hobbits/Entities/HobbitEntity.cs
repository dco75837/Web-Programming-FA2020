using Hobbits.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Hobbits.Entities
{
    public class HobbitEntity
    {
        public string Name { get; set; }

        // must have no args constructor for entity classes
        public HobbitEntity()
        {

        }

        public HobbitEntity(HobbitModel hobbitModel)
        {
            this.Name = hobbitModel.Name;
        }

        public HobbitModel ToModel()
        {
            return new HobbitModel()
            {
                Name = this.Name
            };
        }
    }
}
