using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission2HW.Models
{
    public class GradeCalculatorModels
    {
        [Required]
        [Range(0,100)]
        public int AssignPercent { get; set; }
        [Required]
        [Range(0, 100)]
        public int GroupProjPercent { get; set; }
        [Required]
        [Range(0, 100)]
        public int QuizPercent { get; set; }
        [Required]
        [Range(0, 100)]
        public int ExamPercent { get; set; }
        [Required]
        [Range(0, 100)]
        public int IntexPercent { get; set; }

    }
}
