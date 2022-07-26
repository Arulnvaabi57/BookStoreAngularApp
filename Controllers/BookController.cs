using BookStoreApp.Context;
using BookStoreApp.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookStoreApp.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {

        private readonly DataContext _dataContext;
        public BookController(DataContext dataContext)
        {
            _dataContext = dataContext;
        }


        [HttpGet("{isbn}")]
        public async Task<IActionResult> Get(int isbn)
        {
            var data =  _dataContext.Books.FirstOrDefault(x => x.Isbn == isbn);
            return Ok(data);
        }

        [HttpGet]
        public async Task<IActionResult> GetAllBooks()
        {
            var data = await _dataContext.Books.ToListAsync();
            return Ok(data);
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Book data)
        {
            _dataContext.Books.Add(data);
            await _dataContext.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody] Book obj)
        {
            _dataContext.Books.Update(obj);
            await _dataContext.SaveChangesAsync();
            return Ok();
        }
    }
}