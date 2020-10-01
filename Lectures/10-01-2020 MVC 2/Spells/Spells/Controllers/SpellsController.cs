using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Spells.Controllers
{
    
    public class SpellsController : Controller
    {

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult NewRoute()
        {
            return new ContentResult()
            {
                StatusCode = (int) HttpStatusCode.Accepted,
                Content = "You accessed the new route!"
            };
        }
    }
}
