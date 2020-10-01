using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Microsoft.VisualBasic.CompilerServices;
using Spells.Services;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;

namespace Spells.Controllers
{
    
    public class SpellsController : Controller
    {
        // Once again, this is static because we don't know dependency injection yet.
        // stay tuned for assignment 6
        private static SpellsDatabase spellsDatabase = new SpellsDatabase();

        static SpellsController()
        {
            spellsDatabase.Add("Levitate");
            spellsDatabase.Add("Unlock");
            spellsDatabase.Add("Transmute");
        }

        public IActionResult Index()
        {
            return View(spellsDatabase);
        }

        [HttpPost]
        public IActionResult Add()
        {
            if (Request.HasFormContentType)
            {
                if (Request.Form.TryGetValue("spellName", out StringValues spellName)) {
                    spellsDatabase.Add(spellName.ToString());
                }
            }

            return RedirectToAction("index");
        }

        public IActionResult ViewSpell(string id)
        {
            if (int.TryParse(id, out int result))
            {
                ViewData["id"] = result;
                return View(spellsDatabase.Get(result));
            }

            return RedirectToAction("index");
        }

        [HttpPost]
        public IActionResult Delete()
        {
            if (!Request.HasFormContentType)
            {
                return RedirectToAction("index");
            }

            if (!Request.Form.TryGetValue("spellIndex", out StringValues spellIndex))
            {
                return RedirectToAction("index");
            }
            else
            { 
                if (int.TryParse(spellIndex, out int result))
                {
                    spellsDatabase.RemoveAt(result);
                }
            }

            return RedirectToAction("index");
        }
    }
}
