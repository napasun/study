package khj.study.junit.summary;

import static org.junit.Assert.*;

import org.junit.Test;

import khj.study.junit.cal.Calculater;

public class StubTest {
	@Test
	public void stubTest() {
		/**
		 * Stub은 로직이 없고 단지 원하는 값을 반환한다.
		 * 테스트시에 이 객체는 무조건 이 값을 반환한다고 가정할 경우 사용할 수 있다.
		 * */
		Calculater cal = new Calculater();
		
		assertEquals(10, cal.sub(10, 10));
	}
}
