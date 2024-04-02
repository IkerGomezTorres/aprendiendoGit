using System.ComponentModel.DataAnnotations;

namespace BECurso.Models
{
    public class Alumno
    {
        public int Id { get; set; }
        [Required]
        public string Nombre { get; set; }
        [Required]
        public string Ciudad { get; set; }
        [Required]
        public int Edad { get; set; }
        [Required]
        public string Sexo { get; set; }
    }
}
