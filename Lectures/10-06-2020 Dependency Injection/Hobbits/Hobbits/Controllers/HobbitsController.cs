using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Hobbits.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Hobbits.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class HobbitsController : ControllerBase
    {


        public HobbitsController()
        {

        }

        [HttpGet]
        public string Get()
        {
            return "hobbit";
        }
    }
}
