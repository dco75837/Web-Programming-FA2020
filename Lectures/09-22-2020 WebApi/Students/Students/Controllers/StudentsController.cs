using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace Students.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : Controller
    {
        // This breaks a rule that will show up after assignment six.
        // We don't like the "new" keyword here.
        private static List<Student> Students { get; set; } = new List<Student>();

        [HttpGet]
        public IEnumerable<Student> Get()
        {
            return Students;
        }

        [HttpPost]
        public Student Post([FromBody] Student student)
        {
            Students.Add(student);

            return student;
        }

        [HttpPut("{id:int}")]
        public IActionResult Put([FromBody] Student student, int id)
        {
            if (id < 0 || id >= Students.Count)
            {
                return StatusCode((int) HttpStatusCode.NotFound);
            }

            Students[id] = student;

            return Json(student);
        }

        [HttpDelete("{id:int}")]
        public IActionResult Delete(int id)
        {
            if (id < 0 || id >= Students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            Students.RemoveAt(id);

            return StatusCode((int)HttpStatusCode.NoContent);
        }

        [HttpPatch("{id:int}")]
        public IActionResult Patch([FromBody] Student student, int id)
        {
            if (id < 0 || id >= Students.Count)
            {
                return StatusCode((int)HttpStatusCode.NotFound);
            }

            if (!string.IsNullOrWhiteSpace(student.FirstName))
            {
                Students[id].FirstName = student.FirstName;
            }

            if (!string.IsNullOrWhiteSpace(student.LastName))
            {
                Students[id].LastName = student.LastName;
            }

            return Json(student);
        }
    }
}
