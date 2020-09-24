using Students.Models;
using System;

namespace Students.Entities
{

    public class StudentEntity
    {
        public string FirstName { get; set; }

        public string LastName { get; set; }

        public int Views { get; internal set; }

        public StudentModel ToModel()
        {
            return new StudentModel()
            {
                FirstName = this.FirstName,
                LastName = this.LastName
            };
        }

        // Entity classes must explictly define a no-args constructor
        public StudentEntity()
        {

        }

        public StudentEntity(StudentModel model)
        {
            this.FirstName = model.FirstName;
            this.LastName = model.LastName;
            this.Views = model.Views.Count;
        }
    }
}
