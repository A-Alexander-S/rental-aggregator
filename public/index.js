import { renderSearchFormBlock } from './search-form.js';
import { renderSearchStubBlock } from './search-results.js';
import { renderUserBlock } from './user.js';
import { renderToast } from './lib.js';
window.addEventListener('DOMContentLoaded', () => {
    renderUserBlock('Wade Warren', 'heart-red.png', 5);
    console.log(new Date());
    renderSearchFormBlock();
    renderSearchStubBlock();
    renderToast({ text: 'Это пример уведомления. Используйте его при необходимости', type: 'success' }, { name: 'Понял', handler: () => { console.log('Уведомление закрыто'); } });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0JBQWtCLENBQUE7QUFDeEQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0scUJBQXFCLENBQUE7QUFDM0QsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLFdBQVcsQ0FBQTtBQUMzQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sVUFBVSxDQUFBO0FBRXRDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxHQUFHLEVBQUU7SUFDL0MsZUFBZSxDQUFDLGFBQWEsRUFBRSxlQUFlLEVBQUUsQ0FBQyxDQUFDLENBQUE7SUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUE7SUFDdkIscUJBQXFCLEVBQUUsQ0FBQTtJQUN2QixxQkFBcUIsRUFBRSxDQUFBO0lBQ3ZCLFdBQVcsQ0FDVCxFQUFFLElBQUksRUFBRSwyREFBMkQsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQ3RGLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsR0FBRyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQ3pFLENBQUE7QUFDSCxDQUFDLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlclNlYXJjaEZvcm1CbG9jayB9IGZyb20gJy4vc2VhcmNoLWZvcm0uanMnXG5pbXBvcnQgeyByZW5kZXJTZWFyY2hTdHViQmxvY2sgfSBmcm9tICcuL3NlYXJjaC1yZXN1bHRzLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVXNlckJsb2NrIH0gZnJvbSAnLi91c2VyLmpzJ1xuaW1wb3J0IHsgcmVuZGVyVG9hc3QgfSBmcm9tICcuL2xpYi5qcydcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIHJlbmRlclVzZXJCbG9jaygnV2FkZSBXYXJyZW4nLCAnaGVhcnQtcmVkLnBuZycsIDUpXG4gIGNvbnNvbGUubG9nKG5ldyBEYXRlKCkpXG4gIHJlbmRlclNlYXJjaEZvcm1CbG9jaygpXG4gIHJlbmRlclNlYXJjaFN0dWJCbG9jaygpXG4gIHJlbmRlclRvYXN0KFxuICAgIHsgdGV4dDogJ9Ct0YLQviDQv9GA0LjQvNC10YAg0YPQstC10LTQvtC80LvQtdC90LjRjy4g0JjRgdC/0L7Qu9GM0LfRg9C50YLQtSDQtdCz0L4g0L/RgNC4INC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4JywgdHlwZTogJ3N1Y2Nlc3MnIH0sXG4gICAgeyBuYW1lOiAn0J/QvtC90Y/QuycsIGhhbmRsZXI6ICgpID0+IHsgY29uc29sZS5sb2coJ9Cj0LLQtdC00L7QvNC70LXQvdC40LUg0LfQsNC60YDRi9GC0L4nKSB9IH1cbiAgKVxufSlcbiJdfQ==