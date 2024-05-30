using Microsoft.AspNetCore.Mvc;

namespace TaskAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ExerciseController : ControllerBase
    {
        private static List<string> strings = new List<string>
        {
            "string1",
            "string2",
            "string8",
            "string7",
            "string3"
        };

        [HttpGet("{id}")]
        public IActionResult Get(int id, [FromQuery] double queryParam1, [FromQuery] double queryParam2)
        {
            double sum = queryParam1 + queryParam2;
            return Ok($"{id}: {sum}");
        }

        [HttpGet]
        public IActionResult GetSum([FromQuery] List<double> nums) 
        {
            double sum = nums.Sum();
            return Ok(sum);
        }

        [HttpGet("getList")]
        public IActionResult GetList()
        {
            return Ok(strings);
        }

        [HttpPut("editList{position}")]
        public IActionResult EditList(int position, [FromBody] string value)
        {
            if (position < 0 || position >= strings.Count)
                return BadRequest("position out of bounds");

            strings[position] = value;
            return Ok(strings);
        }

        [HttpDelete("deleteFrom{position}")]
        public IActionResult Delete(int position)
        {
            if (position < 0 || position >= strings.Count)
                return BadRequest("position out of bounds");

            strings.RemoveAt(position);
            return Ok(strings);
        }
    }
}
