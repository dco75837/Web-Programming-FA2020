using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Students.Entities;
using Students.Models;

namespace Students.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class StudentsController : Controller
    {
        // This breaks a rule that will show up after assignment six.
        // We don't like the "new" keyword here.
        private static List<StudentModel> Students { get; set; } = new List<StudentModel>();

        [HttpGet]
        public IEnumerable<StudentEntity> Get()
        {
            return Students.Select(element => new StudentEntity(element));
        }

        [HttpPost]
        public StudentEntity Post([FromBody] StudentEntity student)
        {
            Students.Add(student.ToModel());

            return student;
        }

        [HttpPost("{id:int}/views")]
        public ViewEntity PostView([FromBody] ViewEntity view, int id)
        {
            // add this view entity into the student model at {id}

            
            return view;
        }

        [HttpPut("{id:int}")]
        public IActionResult Put([FromBody] StudentEntity student, int id)
        {
            if (id < 0 || id >= Students.Count)
            {
                return StatusCode((int) HttpStatusCode.NotFound);
            }

            Students[id] = student.ToModel();

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
        public IActionResult Patch([FromBody] StudentEntity student, int id)
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
