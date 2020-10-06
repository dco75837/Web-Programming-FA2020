using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hobbits.Entities;
using Hobbits.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hobbits.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HobbitsController : ControllerBase
    {

        private readonly static HobbitsDatabase hobbitsDatabase = new HobbitsDatabase();

        public HobbitsController()
        {

        }

        [HttpGet]
        public IEnumerable<HobbitEntity> Get()
        {
            return hobbitsDatabase.GetAll().Select(hobbit => new HobbitEntity(hobbit));
        }
    }
}
