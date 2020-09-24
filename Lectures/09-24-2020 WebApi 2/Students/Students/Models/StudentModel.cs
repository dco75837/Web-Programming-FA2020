using System;
using System.Collections.Generic;

namespace Students.Models
{

    public class StudentModel
    {
        public StudentModel()
        {
            this.Views = new List<string>();
        }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public bool IsTa { get; set; }

        public List<string> Views { get; set; }
    }
}
