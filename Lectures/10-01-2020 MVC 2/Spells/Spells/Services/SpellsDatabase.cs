using Spells.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Threading.Tasks;

namespace Spells.Services
{
    public class SpellsDatabase
    {
        private List<SpellModel> spells = new List<SpellModel>();

        public int Count()
        {
            return spells.Count;
        }

        public void Add(string spell)
        {
            this.spells.Add(new SpellModel() { Spell = spell });
        }

        public SpellModel Get(int index)
        {
            // not doing index checking here. That should be done in the controller

            return this.spells[index];
        }

        public void RemoveAt(int index)
        {
            this.spells.RemoveAt(index);
        }

        public void Mix(string one, string two)
        {

        }
    }
}
